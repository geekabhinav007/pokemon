import './Pokemon.css';

export default function Pokemon({num}) {
    if (num <= 152 && num > 0) {
        let baseUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${num}.png`;

        return (
            <div className='pokemon-container'> {/* Apply .pokemon-container class here */}
                <div className='pokemon'>
                    <h1>Pokemon #{num}</h1>
                    <img src={baseUrl} alt="Pokemon"/> 
                </div>
            </div>
        );
    } else {
        const baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
        let num = Math.floor(Math.random()*151) + 1;
        let url = baseUrl + String(num) + ".png";

        return (
            <div className='pokemon-container'> {/* Apply .pokemon-container class here */}
                <div className='pokemon'>
                    <h1>Pokemon #{num}</h1>
                    <img src={url} alt="Pokemon"/> 
                </div>
            </div>
        );
    }
};
