"use client";

import { useState, useEffect, useMemo } from 'react';
import { cn } from '@/lib/utils';

type TypedRolesProps = {
  roles: string[];
  onColorChange: (color: string) => void;
};

const textColors = [
    'text-sky-400',
    'text-purple-500',
    'text-red-500',
    'text-green-500',
    'text-yellow-500',
    'text-orange-500',
];

const ringColors = [
    'ring-sky-400',
    'ring-purple-500',
    'ring-red-500',
    'ring-green-500',
    'ring-yellow-500',
    'ring-orange-500',
];

export function TypedRoles({ roles, onColorChange }: TypedRolesProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delay = 2000;

  const currentRole = useMemo(() => roles[roleIndex], [roles, roleIndex]);
  const currentTextColor = useMemo(() => textColors[roleIndex % textColors.length], [roleIndex]);
  const currentRingColor = useMemo(() => ringColors[roleIndex % ringColors.length], [roleIndex]);

  useEffect(() => {
    onColorChange(currentRingColor);
  }, [currentRingColor, onColorChange]);

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
    <span className={cn("transition-colors duration-500", currentTextColor)}>
      {typedRole}
      <span className={cn("ml-1 animate-pulse transition-colors duration-500", currentTextColor)}>|</span>
    </span>
  );
}
