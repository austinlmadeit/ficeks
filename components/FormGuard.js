'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { HONEYPOT_FIELD, ELAPSED_FIELD } from '@/lib/form-guard';

/**
 * Client half of the bot defence. Gives a form:
 *   - state for the honeypot field
 *   - the time since the form rendered
 *   - a payload to merge into the request body
 *
 * Usage:
 *   const guard = useFormGuard();
 *   ...
 *   <HoneypotField guard={guard} />
 *   body: JSON.stringify({ ...fields, ...guard.payload() })
 */
export function useFormGuard() {
  const mountedAt = useRef(null);
  const [trap, setTrap] = useState('');

  useEffect(() => {
    // Set on mount rather than at first render so the value is a real client
    // clock reading and never differs between server and client markup.
    mountedAt.current = Date.now();
  }, []);

  const payload = useCallback(() => ({
    [HONEYPOT_FIELD]: trap,
    [ELAPSED_FIELD]: mountedAt.current === null ? 0 : Date.now() - mountedAt.current,
  }), [trap]);

  return { trap, setTrap, payload };
}

/**
 * The honeypot input.
 *
 * Intentionally NOT type="hidden": bots skip those precisely because they are
 * an obvious trap. This is an ordinary text input pushed off screen, kept out
 * of the tab order, hidden from assistive technology, and excluded from
 * browser autofill so a real person can never fill it by accident.
 */
export function HoneypotField({ guard }) {
  return (
    <div aria-hidden="true" style={{
      position: 'absolute',
      width: '1px',
      height: '1px',
      padding: 0,
      margin: '-1px',
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      whiteSpace: 'nowrap',
      border: 0,
    }}>
      <label htmlFor={HONEYPOT_FIELD}>
        Company website (leave this field empty)
      </label>
      <input
        type="text"
        id={HONEYPOT_FIELD}
        name={HONEYPOT_FIELD}
        value={guard.trap}
        onChange={(e) => guard.setTrap(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
      />
    </div>
  );
}
