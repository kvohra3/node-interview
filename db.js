const synchDB = () => {
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

  const get = (table, id = null) => {
    if (!table) {
      throw new Error('No table passed in');
    }
    if (!id) {
      console.log(`getting ${table} from db`);
      return db[table];
    }
    console.log(`getting ${id} from ${table}`);
    return db[table].filter(ele => ele.id === id);
  };

  const put = (table, data = null) => {
    if (!data || !table) {
      throw new Error('No data or table is passed in');
    }
    db[table].push(data);
    console.log(`added ${table} with ${JSON.stringify(data)}`);
  };

  const del = (table, id = null) => {
    if (!table || !data[table]) {
      throw new Error('No valid table passed in');
    }
    if (!id) {
      console.log(`deleteing table ${table}`);
      delete db[table];
    }
    db[table].filter(ele => ele.id !== id);
  };

  return {
    get,
    put,
    del
  };
};

module.exports = synchDB;
