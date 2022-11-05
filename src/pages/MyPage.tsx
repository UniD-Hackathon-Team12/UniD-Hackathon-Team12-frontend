import { Grid } from '@mui/material'
import SelectedListItem from '../components/SelectedListItem'
import React, { useState, useEffect } from 'react'


function MyPage() {
    const [Id, setId] = useState('')

    return (
        <>
            <h2>{Id}님의 마이페이지</h2>
            <Grid container spacing={3}>
                <Grid item xs>
                    <SelectedListItem />
                </Grid>
                <Grid item xs>
                    <SelectedListItem />
                </Grid>
                <Grid item xs>
                    <SelectedListItem />
                </Grid>
            </Grid>

        </>
    );
}

export default MyPage;