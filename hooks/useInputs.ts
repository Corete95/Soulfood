import React, { useState } from 'react';

export default function useInputs(initialState: any) {
  const [form, setForm] = useState(initialState);

  const onChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    console.log(
      'test',
      form.map((item) => item.checkBox)
    );
    console.log(name, value, type);
    console.log('check', e.target.checked);
    if (type === 'checkbox') {
      console.log('123', form);
      setForm((prev: any) => ({
        ...form,
        [name]: !prev[name],
      }));
      return;
    }

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
