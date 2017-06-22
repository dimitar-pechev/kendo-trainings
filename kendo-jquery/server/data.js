/* globals module */

const data = [
    {
        'name': 'Simon Mignolet',
        'position': 'Keeper',
        'jerseyNumber': 22,
        'dateOfBirth': '1988-03-06',
        'nationality': 'Belgium',
        'contractUntil': '2021-06-30',
        'id': 1
    },
    {
        'name': 'Loris Karius',
        'position': 'Keeper',
        'jerseyNumber': 1,
        'dateOfBirth': '1993-06-22',
        'nationality': 'Germany',
        'contractUntil': '2021-06-30',
        'id': 2
    },
    {
        'name': 'Ádám Bogdán',
        'position': 'Keeper',
        'jerseyNumber': 34,
        'dateOfBirth': '1987-09-27',
        'nationality': 'Hungary',
        'contractUntil': '2019-06-30',
        'id': 3
    },
    {
        'name': 'Alexander Manninger',
        'position': 'Keeper',
        'jerseyNumber': 13,
        'dateOfBirth': '1977-06-04',
        'nationality': 'Austria',
        'contractUntil': '2017-06-30',
        'id': 4
    },
    {
        'name': 'Dejan Lovren',
        'position': 'Centre-Back',
        'jerseyNumber': 6,
        'dateOfBirth': '1989-07-05',
        'nationality': 'Croatia',
        'contractUntil': '2019-06-30',
        'id': 5
    },
    {
        'name': 'Ragnar Klavan',
        'position': 'Centre-Back',
        'jerseyNumber': 17,
        'dateOfBirth': '1985-10-30',
        'nationality': 'Estonia',
        'contractUntil': '2019-06-30',
        'id': 6
    },
    {
        'name': 'Joe Gomez',
        'position': 'Centre-Back',
        'jerseyNumber': 12,
        'dateOfBirth': '1997-05-23',
        'nationality': 'England',
        'contractUntil': '2022-06-30',
        'id': 7
    },
    {
        'name': 'Alberto Moreno',
        'position': 'Left-Back',
        'jerseyNumber': 18,
        'dateOfBirth': '1992-07-05',
        'nationality': 'Spain',
        'contractUntil': '2019-06-30',
        'id': 8
    },
    {
        'name': 'Nathaniel Clyne',
        'position': 'Right-Back',
        'jerseyNumber': 2,
        'dateOfBirth': '1991-04-05',
        'nationality': 'England',
        'contractUntil': '2020-06-30',
        'id': 9
    },
    {
        'name': 'Connor Randall',
        'position': 'Right-Back',
        'jerseyNumber': 56,
        'dateOfBirth': '1995-10-21',
        'nationality': 'England',
        'contractUntil': '2019-06-30',
        'id': 10
    },
    {
        'name': 'Trent Alexander-Arnold',
        'position': 'Right-Back',
        'jerseyNumber': 66,
        'dateOfBirth': '1998-10-07',
        'nationality': 'England',
        'contractUntil': '2021-06-30',
        'id': 11
    },
    {
        'name': 'Emre Can',
        'position': 'Defensive Midfield',
        'jerseyNumber': 23,
        'dateOfBirth': '1994-01-12',
        'nationality': 'Germany',
        'contractUntil': '2018-06-30',
        'id': 12
    },
    {
        'name': 'Lucas Leiva',
        'position': 'Defensive Midfield',
        'jerseyNumber': 21,
        'dateOfBirth': '1987-01-09',
        'nationality': 'Brazil',
        'contractUntil': '2017-06-30',
        'id': 13
    },
    {
        'name': 'Kevin Stewart',
        'position': 'Defensive Midfield',
        'jerseyNumber': 35,
        'dateOfBirth': '1993-09-07',
        'nationality': 'England',
        'contractUntil': '2021-06-30',
        'id': 14
    },
    {
        'name': 'Jordan Henderson',
        'position': 'Central Midfield',
        'jerseyNumber': 14,
        'dateOfBirth': '1990-06-17',
        'nationality': 'England',
        'contractUntil': '2020-06-30',
        'id': 15
    },
    {
        'name': 'James Milner',
        'position': 'Central Midfield',
        'jerseyNumber': 7,
        'dateOfBirth': '1986-01-04',
        'nationality': 'England',
        'contractUntil': '2019-06-30',
        'id': 16
    },
    {
        'name': 'Marko Grujic',
        'position': 'Central Midfield',
        'jerseyNumber': 16,
        'dateOfBirth': '1996-04-13',
        'nationality': 'Serbia',
        'contractUntil': '2020-06-30',
        'id': 17
    },
    {
        'name': 'Philippe Coutinho',
        'position': 'Attacking Midfield',
        'jerseyNumber': 10,
        'dateOfBirth': '1992-06-12',
        'nationality': 'Brazil',
        'contractUntil': '2022-06-30',
        'id': 18
    },
    {
        'name': 'Georginio Wijnaldum',
        'position': 'Attacking Midfield',
        'jerseyNumber': 5,
        'dateOfBirth': '1990-11-11',
        'nationality': 'Netherlands',
        'contractUntil': '2021-06-30',
        'id': 19
    },
    {
        'name': 'Adam Lallana',
        'position': 'Attacking Midfield',
        'jerseyNumber': 20,
        'dateOfBirth': '1988-05-10',
        'nationality': 'England',
        'contractUntil': '2020-06-30',
        'id': 20
    },
    {
        'name': 'Sheyi Ojo',
        'position': 'Left Wing',
        'jerseyNumber': 54,
        'dateOfBirth': '1997-06-19',
        'nationality': 'England',
        'contractUntil': '2020-06-30',
        'id': 21
    },
    {
        'name': 'Ben Woodburn',
        'position': 'Left Wing',
        'jerseyNumber': 58,
        'dateOfBirth': '1999-10-15',
        'nationality': 'Wales',
        'contractUntil': '2019-06-30',
        'id': 22
    },
    {
        'name': 'Sadio Mané',
        'position': 'Right Wing',
        'jerseyNumber': 19,
        'dateOfBirth': '1992-04-10',
        'nationality': 'Senegal',
        'contractUntil': '2021-06-30',
        'id': 23
    },
    {
        'name': 'Roberto Firmino',
        'position': 'Secondary Striker',
        'jerseyNumber': 11,
        'dateOfBirth': '1991-10-02',
        'nationality': 'Brazil',
        'contractUntil': '2020-06-30',
        'id': 24
    },
    {
        'name': 'Daniel Sturridge',
        'position': 'Centre-Forward',
        'jerseyNumber': 15,
        'dateOfBirth': '1989-09-01',
        'nationality': 'England',
        'contractUntil': '2019-06-30',
        'id': 25
    },
    {
        'name': 'Divock Origi',
        'position': 'Centre-Forward',
        'jerseyNumber': 27,
        'dateOfBirth': '1995-04-18',
        'nationality': 'Belgium',
        'contractUntil': '2019-06-30',
        'id': 26
    },
    {
        'name': 'Danny Ings',
        'position': 'Centre-Forward',
        'jerseyNumber': 28,
        'dateOfBirth': '1992-07-23',
        'nationality': 'England',
        'contractUntil': '2020-06-30',
        'id': 27
    }
];

module.exports = () => {
    return {
        getAllPlayers(skip, take, sortQuery, sortOrder) {
            let result = JSON.parse(JSON.stringify(data));

            if (sortQuery) {
                const order = sortOrder === 'asc' ? 1 : -1;

                result = result.sort((first, second) => {
                    if (first[sortQuery] > second[sortQuery]) {
                        return 1 * order;
                    } else if (first[sortQuery] < second[sortQuery]) {
                        return -1 * order;
                    } else {
                        return 0;
                    }
                });
            }

            if (take) {
                result = result.slice(skip, skip + take);
            }

            const total = data.length;

            return {
                data: result,
                total
            };
        },
        editPlayer(newPlayerData) {
            let player = data.find(x => x.id == newPlayerData.id);
            let index = data.indexOf(player);
            data[index] = newPlayerData;
        },
        removePlayer(id) {
            let player = data.find(x => x.id == id);
            let index = data.indexOf(player);
            data.splice(index, 1);
        },
        addNewPlayer(player) {
            player.id = +data[data.length - 1].id + 1;
            data.push(player);
            return {
                data: player
            };
        }
    };
};