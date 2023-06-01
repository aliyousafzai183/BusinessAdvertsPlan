import SQLite from 'react-native-sqlite-storage';
import { ToastAndroid } from 'react-native';

const db = SQLite.openDatabase({ name: 'mydb.db', location: 'default' });

const createData = (name, expenditure, clicks, impressions) => {
  db.transaction((tx) => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS mytable (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, expenditure INTEGER, clicks INTEGER, impressions INTEGER)',
      [],
      () => {
        tx.executeSql(
          'INSERT INTO mytable (name, expenditure, clicks, impressions) VALUES (?, ?, ?, ?)',
          [name, expenditure, clicks, impressions],
          (_, result) => {
            console.log('Data created successfully');
            ToastAndroid.show('Data created successfully', ToastAndroid.SHORT);
          },
          (_, error) => {
            console.log('Error creating data:', error);
            ToastAndroid.show('Error creating data', ToastAndroid.SHORT);
          }
        );
      },
      (_, error) => {
        console.log('Error creating table:', error);
        ToastAndroid.show('Error creating table', ToastAndroid.SHORT);
      }
    );
  });
};

const readDataById = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM mytable WHERE id = ?',
        [id],
        (_, result) => {
          if (result.rows.length > 0) {
            const data = result.rows.item(0);
            console.log('Data retrieved successfully:', data);
            resolve(data);
          } else {
            console.log('No data found for ID:', id);
            resolve(null);
          }
        },
        (_, error) => {
          console.log('Error retrieving data:', error);
          ToastAndroid.show('Error retrieving data', ToastAndroid.SHORT);
          reject(error);
        }
      );
    });
  });
};

const readData = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM mytable',
        [],
        (_, result) => {
          const data = result.rows.raw();
          console.log('Data retrieved successfully:', data);
          resolve(data);
        },
        (_, error) => {
          console.log('Error retrieving data:', error);
          // ToastAndroid.show('No data found!', ToastAndroid.SHORT);
        }
      );
    });
  });
};

const updateData = (id, name, expenditure, clicks, impressions) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'UPDATE mytable SET name=?, expenditure=?, clicks=?, impressions=? WHERE id=?',
        [name, expenditure, clicks, impressions, id],
        (_, result) => {
          console.log('Data updated successfully');
          ToastAndroid.show('Data updated successfully', ToastAndroid.SHORT);
          resolve();
        },
        (_, error) => {
          console.log('Error updating data:', error);
          ToastAndroid.show('Error updating data', ToastAndroid.SHORT);
          reject(error);
        }
      );
    });
  });
};


const deleteData = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM mytable WHERE id=?',
        [id],
        (_, result) => {
          console.log('Data deleted successfully');
          ToastAndroid.show('Data deleted successfully', ToastAndroid.SHORT);
          resolve();
        },
        (_, error) => {
          console.log('Error deleting data:', error);
          ToastAndroid.show('Error deleting data', ToastAndroid.SHORT);
          reject(error);
        }
      );
    });
  });
};

const deleteAllData = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM mytable',
        [],
        (_, result) => {
          console.log('All data deleted successfully');
          ToastAndroid.show('All data deleted successfully', ToastAndroid.SHORT);
          resolve();
        },
        (_, error) => {
          console.log('Error deleting data:', error);
          ToastAndroid.show('Error deleting data', ToastAndroid.SHORT);
          reject(error);
        }
      );
    });
  });
};



export { createData, readData, updateData, deleteData, readDataById, deleteAllData };