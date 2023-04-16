import '../css/card.css'
import { Card as MUICard } from '@mui/material'

export function Card(props) {
    return (
        <MUICard className={'general-card-shadow' + props.className? props.className : ""}>
            {props.children}
        </MUICard>
    )
}
