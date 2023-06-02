import SQLite from 'react-native-sqlite-storage';
import Toast from 'react-native-toast-message';

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
            Toast.show({
              type: 'success',
              text1: 'Data created successfully',
              visibilityTime: 2000,
            });
          },
          (_, error) => {
            console.log('Error creating data:', error);
            Toast.show({
              type: 'error',
              text1: 'Error creating data',
              visibilityTime: 2000,
            });
          }
        );
      },
      (_, error) => {
        console.log('Error creating table:', error);
        Toast.show({
          type: 'error',
          text1: 'Error creating table',
          visibilityTime: 2000,
        });
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
          Toast.show({
            type: 'error',
            text1: 'Error retrieving data',
            visibilityTime: 2000,
          });
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
          // Toast.show({
          //   type: 'info',
          //   text1: 'No data found!',
          //   visibilityTime: 2000,
          // });
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
          Toast.show({
            type: 'success',
            text1: 'Data updated successfully',
            visibilityTime: 2000,
          });
          resolve();
        },
        (_, error) => {
          console.log('Error updating data:', error);
          Toast.show({
            type: 'error',
            text1: 'Error updating data',
            visibilityTime: 2000,
          });
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
          Toast.show({
            type: 'success',
            text1: 'Data deleted successfully',
            visibilityTime: 2000,
          });
          resolve();
        },
        (_, error) => {
          console.log('Error deleting data:', error);
          Toast.show({
            type: 'error',
            text1: 'Error deleting data',
            visibilityTime: 2000,
          });
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
          Toast.show({
            type: 'success',
            text1: 'All data deleted successfully',
            visibilityTime: 2000,
          });
          resolve();
        },
        (_, error) => {
          console.log('Error deleting data:', error);
          Toast.show({
            type: 'error',
            text1: 'Error deleting data',
            visibilityTime: 2000,
          });
          reject(error);
        }
      );
    });
  });
};

export { createData, readData, updateData, deleteData, readDataById, deleteAllData };