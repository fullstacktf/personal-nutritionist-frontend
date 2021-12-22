import { FC } from "react";

import { Autocomplete, TextField, Stack } from "@mui/material";

interface Props {
  label: string;
  placeholder: string;
  data: Array<string>;
  onChange: any;
  name: string;
}

export const Tags: FC<Props> = ({ label, placeholder, data, onChange, name }) => {
  return (
    <Stack spacing={3} sx={{ width: 500 }}>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={data}
        getOptionLabel={(option) => option}
        filterSelectedOptions
        onChange={onChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            placeholder={placeholder}
          />
        )}
      />
    </Stack>
  );
};
