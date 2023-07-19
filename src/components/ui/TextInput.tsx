import React from 'react';

export default function TextInput({
  title,
  value,
  onChange,
}: {
  title: string;
  value: string;
  onChange: any;
}) {
  return <textarea onChange={onChange} placeholder={title} value={value} />;
}
