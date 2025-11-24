import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: 200,
                color: "#00CC22",
                height: 4,

                "& .MuiSlider-thumb": {
                    width: 18,
                    height: 18,
                    backgroundColor: "#FFF",
                    border: "2px solid #00CC22",
                    boxShadow: "none",

                    "&:hover": {
                        boxShadow: "0 0 0 6px rgba(0, 204, 34, 0.16)"
                    },
                },
                '& .MuiSlider-rail': {
                    backgroundColor: '#8B8B8B', // серый задний трек
                    opacity: 1,
                    height: 4,
                },
                '& .MuiSlider-track': {
                    backgroundColor: '#00CC22',
                    height: 4,
                }
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
