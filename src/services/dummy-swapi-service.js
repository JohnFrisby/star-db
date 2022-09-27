export default class DummySwapiService {
    _people = [
        {
            id:1,
            name: 'Gogi [Test}',
            gender: 'male',
            birthYear: 'long ago',
            eyeColor: 'dark brown'
        },

        {
            id:2,
            name: 'Grisha [Test}',
            gender: 'unknown',
            birthYear: '24',
            eyeColor: 'dark brown'

        }
    ];

    _planets = [
        {
            id: 1,
            name: 'Earth [Test]',
            population: '7 530 000 000',
            rotationPeriod: '23 hours 56 seconds',
            diameter: '12 742 km'
        },

        {
            id: 2,
            name: 'Vantus [Test]',
            population: 'her znaet',
            rotationPeriod: '5243 seconds',
            diameter: '12 103 km'
        },
    ];

    _starships = [
        {
            id: 1,
            name: 'USS Exnterprice [Test]',
            model: 'NCC-1701-C',
            manufacturer: 'Northrop Grumman Shipbuiding',
            costInCredirs: 'ta skil`ky mozhna, kurva'
        }
    ];

    getAllPeople = async () => {
        return this._people;
    };

    getPerson = async () => {
        return this._people[0];
    };

    getAllPlanets = async () => {
        return this._planets;
    };

    getPlanet = async () => {
        return this._planets[0];
    };

    getAllStarships = async () => {
        return this._starships;
    };

    getStarship = async () => {
        return this._starships[0];
    };

    getPersonImage = () => {
        return `https://placeimg.com/400/500/people`
    };
    
    getPlanetImage = () => {
        return `https://placeimg.com/400/400/nature`
    };

    getStarshipImage = () => {
        return `https://placeimg.com/600/400/tech`
    };
}