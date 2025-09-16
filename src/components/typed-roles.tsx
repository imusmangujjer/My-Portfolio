"use client";

import { useState, useEffect, useMemo } from 'react';
import { cn } from '@/lib/utils';

type TypedRolesProps = {
  roles: string[];
};

const roleColors = [
    'text-sky-400',   // Light Blue
    'text-purple-500', // Purple
    'text-red-500',    // Red
    'text-green-500'   // Green
];

export function TypedRoles({ roles }: TypedRolesProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delay = 2000;

  const currentRole = useMemo(() => roles[roleIndex], [roles, roleIndex]);
  const currentColor = useMemo(() => roleColors[roleIndex % roleColors.length], [roleIndex]);

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
    <span className={cn("transition-colors duration-500", currentColor)}>
      {typedRole}
      <span className={cn("ml-1 animate-pulse transition-colors duration-500", currentColor)}>|</span>
    </span>
  );
}
