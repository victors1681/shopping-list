import { useField, useFormikContext } from "formik";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";

import * as React from "react";

export interface SelectOption {
  value: string;
  label: string;
}

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    height: "52px",
    background: "#FFFFFF",
    border: "1px solid #D5DFE9",
    boxSizing: "border-box",
    borderRadius: "4px",
    padding: "10px",
  },
}));

const TextAreaCustom = styled(TextareaAutosize)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  fontFamily: "Nunito",
  fontSize: "16px",
  height: "140px",
  background: "#FFFFFF",
  border: "1px solid #D5DFE9",
  boxSizing: "border-box",
  borderRadius: "4px",
  padding: "10px",
}));

export interface Props {
  name: string;
  label: string;
  value?: string;
  error?: string | null | undefined;
  type?: string;
  hideLabel?: boolean;
  handleChange?: (value: any) => void;
  options?: SelectOption[];
  disabled?: boolean;
  placeholder?: string
}

export const InputText = ({
  name,
  error,
  type,
  disabled,
  placeholder
}: Props): JSX.Element => {
  const [field, meta] = useField({ name });
  const { isSubmitting } = useFormikContext();

  return (
    <React.Fragment>
      <BootstrapInput
        name={name}
        fullWidth
        disabled={disabled || isSubmitting}
        type={type || "text"}
        error={!!(meta.error || error)}
        id={`${name}-input`}
        onChange={field.onChange}
        value={field.value}
        placeholder={placeholder}
      />
    </React.Fragment>
  );
};

export const TextArea = ({ name, error, disabled }: Props): JSX.Element => {
  const [field, meta] = useField({ name });
  const { isSubmitting } = useFormikContext();

  return (
    <React.Fragment>
      <TextAreaCustom
        minRows={3}
        placeholder="Get them from Walmart"
        style={{ width: "100%", height: "140px" }}
        name={name}
        disabled={disabled || isSubmitting}
        // error={!!(meta.error || error)}
        id={`${name}-input`}
        onChange={field.onChange}
        value={field.value}
      />
    </React.Fragment>
  );
};
