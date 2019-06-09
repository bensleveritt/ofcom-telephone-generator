# Ofcom Telephone Number Generator

The intent of this lib is to provide a random generator of [Ofcom-sanctified](https://www.ofcom.org.uk/phones-telecoms-and-internet/information-for-industry/numbering/numbers-for-drama) UK phone numbers, particularly for use in fictional/promotional/test usages.

[![CircleCI](https://circleci.com/gh/bensleveritt/ofcom-telephone-generator/tree/master.svg?style=svg)](https://circleci.com/gh/bensleveritt/ofcom-telephone-generator/tree/master)
[![codecov](https://codecov.io/gh/bensleveritt/ofcom-telephone-generator/branch/master/graph/badge.svg)](https://codecov.io/gh/bensleveritt/ofcom-telephone-generator)

## Usage

```javascript
import generator from 'ofcom-telgen';

const phoneNumber = generator(); // 01632960123
```

## Todo

- [ ] Implement area codes
- [ ] Implement mobile numbers
- [x] Check upper and lower bounds provide 1000 numbers
- [ ] Validate phone numbers
- [ ] Add typing to output

## License

[MIT](https://opensource.org/licenses/MIT)
