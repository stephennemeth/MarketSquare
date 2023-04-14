import '../css/card.css'
import { Card as MUICard } from '@mui/material'

export function Card(props) {
    return (
        <div className='general-card-shadow'>
            <MUICard>
                {props.children}
            </MUICard>
        </div>
    )
}
