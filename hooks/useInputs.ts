import React, { useState } from 'react';

export default function useInputs(initialState: any) {
  const [form, setForm] = useState(initialState);

  const onChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setForm((prev: any) => ({
        ...form,
        [name]: !prev[name],
      }));
      return;
    }

    // radio, text, password, textarea
    setForm({ ...form, [name]: value });
  };

  const onChangeSelect = (name: string, value: string) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  return [form, onChangeForm, onChangeSelect, setForm];
}
