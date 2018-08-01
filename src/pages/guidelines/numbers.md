---
path: "/guidelines/writing/numbers"
date: "2018-07-31"
title: "Numbers"
---
import RadButton from './src/components/RadButton.js';

<RadButton text="It worked" />
<!--  todo rework how the page page is built based on gatsby tut -->

## Description
A user needs to see a numeric value
## Examples
| Type | Currency | Specificity |
| --- | --- | --- |
| Std | $2,936,172.07<br>$0.97 | 0<br>0.97<br>10.5%<br>1,000<br>1,000,000 |
| German | €2.936.172,07<br>€0,97 | 0<br>0,97<br>10,5%<br>1.000<br>1.000.000 |

## Usage
Localize numbers using the NumberDisplay component.

Only show 0 if the value is zero. If data is not available, say **"Not available"**, **"n/a"**, or **show no value** (in a table).

#### Use whole numbers if no fractional amount

| Do | Don't |
| --- | --- |
| 0 | 0.0 |
| 32 | 32.0|

#### Use one digit decimals for percentages and rating averages. Don't display a decimal if the number is whole, unless in a table column.

| Do | Don't |
| --- | --- |
| 10.5% | 10.50%<br>10.49% |
| 30% | 30.0%|
| 3.5 Average | 3.47 Average |

#### Use two digits for currency.

| Do | Don't |
| --- | --- |
| $35.00 | $35 |
| €27,012.99 | €27,012.994 |

#### Number grouping and truncation
* Use commas (or locale equivalent) for numbers with more than four digits.
* Avoid truncating numbers (1,200 instead of 1.2k) unless in call-out metrics that show a caption with the exact amount. If truncating a number, write out the unit instead of using an abbreviated version to avoid confusion.

| Do | Don't |
| --- | --- |
| 1,234 | 1234 |
| **Über 1.2 Million Bewertungen**<br>(1.234.567 gesamt) | 1.2 Mill. Bewertungen |
| **Over 1.2 million reviews**<br>(1,234,567 total) | 1.2M reviews |
| 1,500 | 1.5k |

#### Hyphens, Dashes
* Use en dashes without spaces in number ranges.
* Use “to” instead of an en dash if a number range is preceded by “from” in a phrase.
* Use “and” if a range is preceded by “between.”

| Do | Don't |
| --- | --- |
| 2&ndash;38 shoppers | 2 &ndash; 38 shoppers |
| Emails will be sent between 9:00 AM and 11:00 AM CST. | Emails will be sent between 9:00&ndash;11:00 AM |
| Campaign active from 2 Aug 2018 to 29 Aug 2018 | Campaign active from 2 Aug 2018&ndash;29 Aug 2018 |

#### Include a space between a number and a unit.

| Do | Don't |
| --- | --- |
| 3.5 kg | 3.5kg |
| 32 shoppers | 32shoppers |
| 5 hours | 5hours |


## This is nonsense

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-prismjs`,
      ]
    }
  }
]
```