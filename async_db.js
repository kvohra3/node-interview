const asynchDB = () => {
  const db = {
    cards: [
      {
        id: '1',
        card: 'gold'
      },
      {
        id: '2',
        card: 'platinum'
      },
      {
        id: '3',
        card: 'green'
      }
    ]
  };

  const get = async (table, id = null) => {
    if (!table) {
      throw new Error('No table passed in');
    }
    if (!id) {
      console.log(`getting ${table} from db`);
      return setTimeout(() => db[table], 2);
    }
    console.log(`getting ${id} from ${table}`);
    return setTimeout(() => db[table].filter(ele => ele.id === id), 2);
  };

  const put = (table, data = null) => {
    if (!data || !table) {
      throw new Error('No data or table is passed in');
    }
    if (db[table]) {
      console.log(`adding ${JSON.stringify(data)} to ${table}`);
      db[table].push(data);
    }
    setTimeout(() => {
      db[table] = data;
    }, 2);
    console.log(`added ${table} with ${JSON.stringify(data)}`);
  };

  const del = (table, id = null) => {
    if (!table || !data[table]) {
      throw new Error('No valid table passed in');
    }
    if (!id) {
      console.log(`deleteing table ${table}`);
      setTimeout(() => {
        delete db[table];
      }, 2);
    }
    setTimeout(() => db[table].filter(ele => ele.id !== id), 2);
  };

  return {
    get,
    put,
    del
  };
};

module.exports = asynchDB;
