import React from 'react'
import styled from 'styled-components';

const Card = styled.div`
    background-color: grey;
    width: 280px;
    height: 400px;
    border: solid 1px black;
    margin: 10px;
`;

const PhotoCar = styled.img`
    max-width: 100%;
    display: block;
`;

const Grid = styled.section`
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    margin: auto;
    border: solid 1px black;
    align-items: center;
    justify-content: center;
`;

class CardVenda extends React.Component {
    render () {
        return (
            <Grid>
                <Card>
                    <PhotoCar src={'https://picsum.photos/280/200?random=1'} />
                    <p>Legenda 1</p>
                </Card>
                <Card>
                    <PhotoCar src={'https://picsum.photos/280/200?random=2'} />
                    <p>Legenda 2</p>
                </Card>
                <Card>
                    <PhotoCar src={'https://picsum.photos/280/200?random=3'} />
                    <p>Legenda 3</p>
                </Card>
                <Card>
                    <PhotoCar src={'https://picsum.photos/280/200?random=4'} />
                    <p>Legenda 4</p>
                </Card>
                <Card>
                    <PhotoCar src={'https://picsum.photos/280/200?random=5'} />
                    <p>Legenda 5</p>
                </Card>
                <Card>
                    <PhotoCar src={'https://picsum.photos/280/200?random=6'} />
                    <p>Legenda 6</p>
                </Card>
                <Card>
                    <PhotoCar src={'https://picsum.photos/280/200?random=7'} />
                    <p>Legendas 7</p>
                </Card>
                <Card>
                    <PhotoCar src={'https://picsum.photos/280/200?random=8'} />
                    <p>Legendas 8</p>
                </Card>
                <Card>
                    <PhotoCar src={'https://picsum.photos/280/200?random=9'} />
                    <p>Legendas 9</p>
                </Card>
                <Card>
                    <PhotoCar src={'https://picsum.photos/280/200?random=10'} />
                    <p>Legendas 10</p>
                </Card>
                <Card>
                    <PhotoCar src={'https://picsum.photos/280/200?random=11'} />
                    <p>Legendas 7</p>
                </Card>
                <Card>
                    <PhotoCar src={'https://picsum.photos/280/200?random=12'} />
                    <p>Legendas 7</p>
                </Card>
            </Grid>
        )
    }    
}


export default CardVenda;