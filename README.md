# Ofcom Telephone Number Generator

The intent of this lib is to provide a random generator of [Ofcom-sanctified](https://www.ofcom.org.uk/phones-telecoms-and-internet/information-for-industry/numbering/numbers-for-drama) UK phone numbers, particularly for use in fictional/promotional/test usages.

## Usage

```javascript
import generator from 'ofcom-telgen';

const phoneNumber = generator();
```

## Todo

- Publish to NPM
- Implement area codes
- Implement mobile numbers
- Check upper and lower bounds provide 1000 numbers
- Validate phone numbers

## License

[MIT](https://opensource.org/licenses/MIT)
