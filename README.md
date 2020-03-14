
# Covid19

Check [covid-19](https://www.who.int/emergencies/diseases/novel-coronavirus-2019/events-as-they-happen) stats in terminal. 

Statistic source can be found [here](https://www.worldometers.info/coronavirus/).


## Installation
```
npm i coronavirus-stats -g 
```

## Usage

```bash
$ covid summary

=====================================
Coronavirus Cases | 147,802         |
=====================================
Total outcomes    | 78,114 (52.85%) |
Recovered         | 72,572 (92.91%) |
Deaths            | 5,542 (7.09%)   |
=====================================


$ covid countries

==============================================================
Country    | Total   | New     | Total   | Deaths  | Active  |
           | Cases   | Cases   | Deaths  | Today   | Cases   |
==============================================================
China      |  80,815 |      +1 |   3,177 |         |  13,486 |
Italy      |  17,660 |  +2,547 |   1,266 |    +250 |  14,955 |
Iran       |  11,364 |  +1,289 |     514 |     +85 |   7,321 |
S. Korea   |   7,979 |    +110 |      71 |      +5 |   7,398 |
Spain      |   5,232 |  +2,086 |     133 |     +47 |   4,906 |
France     |   3,661 |    +785 |      79 |     +18 |   3,570 |
Germany    |   3,675 |    +930 |       8 |      +2 |   3,621 |
USA        |   2,269 |    +572 |      48 |      +7 |   2,190 |
Switzerland|   1,139 |    +271 |      11 |      +4 |   1,124 |
Norway     |     996 |    +196 |       1 |         |     994 |
Sweden     |     814 |    +127 |       1 |         |     812 |
Denmark    |     801 |    +127 |         |         |     800 |
Netherlands|     804 |    +190 |      10 |      +5 |     792 |
UK         |     798 |    +208 |      11 |      +1 |     769 |
Austria    |     504 |    +143 |       1 |         |     497 |
Belgium    |     559 |    +160 |       3 |         |     555 |
Qatar      |     320 |     +58 |         |         |     320 |
Bahrain    |     210 |     +13 |         |         |     166 |
Singapore  |     200 |     +13 |         |         |     103 |
Australia  |     199 |     +43 |       3 |         |     170 |
Canada     |     179 |     +37 |       1 |         |     167 |
Malaysia   |     197 |     +39 |         |         |     165 |
Hong       |     132 |      +1 |       4 |      +1 |      51 |
Greece     |     190 |     +73 |       1 |         |     187 |
Czechia    |     141 |     +25 |         |         |     141 |
Finland    |     155 |     +46 |         |         |     154 |
Israel     |     126 |     +17 |         |         |     122 |
==============================================================
```

## Todo:
 - [ ] Add more countries
 - [ ] Add specific country query
 - [ ] Add snapshots so you can see changes from last check 
 - [x] Make countries reorder in the list based on total cases
 - [ ] Automatically get the top 20 countries instead of a preset list
