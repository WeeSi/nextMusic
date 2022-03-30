/* eslint-disable @next/next/no-img-element */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CircularProgress, Link } from '@mui/material';

export default function CardSearch({data,loading}) {
    return (
        <Card className='absolute w-full' style={{maxHeight: '50vh', overflow: loading||'auto', display:''}}>
            {loading && 
                <div className='flex justify-center p-2'><CircularProgress size={50}/></div>
                    
            }
            {data && data.map((item, index) => (
            <Box sx={{ display: 'block', flexDirection: 'row' }} key={index}>
                <Link href={item.data.albumOfTrack.sharingInfo.shareUrl} target="_blank" style={{ textDecoration: 'none' }}> 
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <div className='flex'>
                        <img src={item.data.albumOfTrack.coverArt.sources[0].url}style={{maxHeight: 90, maxWidth: 90}} className='p-2' alt={item.data.albumOfTrack.coverArt.sources[0].url}/>
                        <Typography component="div" variant="h6">
                            {item.data.name}
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                {item.data.artists.items[0].profile.name}
                            </Typography>
                        </Typography>
                    </div>
                </CardContent>
                </Link> 
            </Box>
            ))}
        </Card>
    )
}