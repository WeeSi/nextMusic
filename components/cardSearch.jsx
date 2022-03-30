import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function CardSearch({data}) {
    console.log("test1",data)
    return (
        <Card className='absolute w-full' style={{maxHeight: '50vh', overflow: 'auto', display:''}}>
            {data.map((item, index) => (
            <Box sx={{ display: 'block', flexDirection: 'row' }} key={index}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {item.data.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {item.data.artists.items[0].profile.name}
                    </Typography>
                </CardContent>
            </Box>
            ))}
        </Card>
    )
}