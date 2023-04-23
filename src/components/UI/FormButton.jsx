import React from 'react';
import { Button } from "@mui/material";
import { COLOR_WHITE, COLOR_LIGHT_GREEN, COLOR_LIGHT_GREEN_HOVER} from './PaletteColor'


const FormButton = ({name, type}) => {
    return (
        <Button
            sx={
                {
                    backgroundColor: COLOR_LIGHT_GREEN,
                    color: COLOR_WHITE,
                    width: "100%",
                    '&:hover' :
                        {
                            backgroundColor: COLOR_LIGHT_GREEN_HOVER
                        },
                    mb: 2
                }
            }
            variant="contained"
            type={type}
        >
            {name}
        </Button>
    );
};

export default FormButton;