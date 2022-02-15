import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';
import { SearchBar, VedioList, VedioDetails } from './components'

const App = () => {

    const [vedio, SetVedio] = useState([]);
    const [selectedVedio, setselectedVedio] = useState(null);

    const AppSubmitHander = async (searchTerm) => {
        console.log(searchTerm);
        const resposne = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyDNcKXOfNEPIr4VUj6oKR_L5Gkao--KKag',
                q: searchTerm,
            }
        });
        console.log(resposne.data.items);
        SetVedio(resposne.data.items);
        setselectedVedio(resposne.data.items[0]);
    }

    const VedioSelectHandler = (vedio) => {
        setselectedVedio(vedio);
    }

    return (
        <>
            <Grid justifyContent="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar OnAppSubmit={AppSubmitHander} />
                        </Grid>
                        <Grid item xs={8}>
                            <VedioDetails vedio={selectedVedio} />
                        </Grid>
                        <Grid item xs={4}>
                            <VedioList vedio={vedio} onVedioSelect={VedioSelectHandler} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}


// class App extends React.Component {
//     render() {
//         return (
//             <>
//                 <h2>Daya</h2>
//                 <Grid justify="center" container spacing={16}>
//                     <Grid item xs={12}>
//                         <Grid container spacing={16}>
//                             <Grid item xs={12}>
//                                 Search Bar
//                             </Grid>
//                             <Grid item xs={8}>
//                                 Vedio Details
//                             </Grid>
//                             <Grid item xs={4}>
//                                 Vedio List
//                             </Grid>
//                         </Grid>
//                     </Grid>
//                 </Grid>
//             </>
//         )
//     }
// }


export default App;