"use client";

import { useState, useEffect, useMemo } from 'react';

type TypedRolesProps = {
  roles: string[];
};

export function TypedRoles({ roles }: TypedRolesProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delay = 2000;

  const currentRole = useMemo(() => roles[roleIndex], [roles, roleIndex]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      if (typedRole.length > 0) {
        timer = setTimeout(() => {
          setTypedRole(current => current.substring(0, current.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setRoleIndex(current => (current + 1) % roles.length);
      }
    } else {
      if (typedRole.length < currentRole.length) {
        timer = setTimeout(() => {
          setTypedRole(current => currentRole.substring(0, current.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delay);
      }
    }
    return () => clearTimeout(timer);
  }, [typedRole, isDeleting, roles, roleIndex, currentRole]);

  return (
    <span className="text-accent">
      {typedRole}
      <span className="ml-1 animate-pulse text-accent">|</span>
    </span>
  );
}
