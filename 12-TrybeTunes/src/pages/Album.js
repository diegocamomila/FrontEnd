import PropTypes from 'prop-types';
import React from 'react';
import Carregando from '../components/Carregando';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import getMusics from '../services/musicsAPI';

class Album extends React.Component {
    constructor() {
        super();

        this.state = {
        artistName: '',
        albumName: '',
        albumList: [],
        loading: false,
        listGetFavorites: [],
        };
        this.musicsApi = this.musicsApi.bind(this);
        this.getFavorites = this.getFavorites.bind(this);
    }

    componentDidMount() {
        this.musicsApi();
        this.getFavorites();
    }

    async getFavorites() {
        this.setState({
        loading: true,
        }, async () => {
            const recoveredSongs = await getFavoriteSongs();
            this.setState({
                loading: false,
                listGetFavorites: recoveredSongs,
            });
        });
    }

    async musicsApi() {
        const { match: { params: { id } } } = this.props;
        const getMusicColections = await getMusics(id);
        this.setState({
            artistName: getMusicColections[0].artistName,
            albumName: getMusicColections[0].collectionName,
            albumList: getMusicColections.slice(1),
        });
    }

    render() {
        const { artistName, albumName, albumList, loading, listGetFavorites } = this.state;
        return (
            <div data-testid="page-album">
                <Header />
                <h1 data-testid="artist-name">{ artistName }</h1>
                <h2 data-testid="album-name">{ albumName }</h2>
                { loading ? (
                    <Carregando />
                ) : (
                    albumList.map(({ trackName, previewUrl, trackId }) => (
                        <div key={ trackId }>
                            <MusicCard
                                musicName={ trackName }
                                playMusic={ previewUrl }
                                trackId={ trackId }
                                albumData={ albumList }
                                listFavorites={ listGetFavorites }
                            />
                        </div>
                    ))
                )}
                {}
            </div>
        );
    }
}

Album.propTypes = {
    id: PropTypes.string.isRequired,
}.isRequired;

export default Album;
