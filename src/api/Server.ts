
// let token = 'b9849e1ea91229dadd455c35ab42d41c44abcc62fc9d8973'

// export const server_calls = {
//   get: async () => {
//     const response = await fetch(`http://127.0.0.1:5000/api/bookshelf`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'x-access-token': `Bearer ${token}`
//       }
//     });

//     if (!response.ok) {
//       throw new Error('failed to fetch data from server')
//     }

//     return await response.json()
//   },
//   create: async (data: any = {}) => {
//     const response = await fetch(`http://127.0.0.1:5000/api/bookshelf`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'x-access-token': `Bearer ${token}`
//       },
//       body: JSON.stringify(data)
//     });

//     if (!response.ok) {
//       throw new Error('failed to create data on server')
//     }

//     return await response.json()
//   },
//   update: async (id: string, data: any = {}) => {
//     const response = await fetch(`http://127.0.0.1:5000/api/bookshelf`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'x-access-token': `Bearer ${token}`
//       },
//       body: JSON.stringify(data)
//     });

//     if (!response.ok) {
//       throw new Error('failed to update data on server')
//     }

//     return await response.json()
//   },
//   delete: async (id: string) => {
//     console.log(id);
//     const response = await fetch(`http://127.0.0.1:5000/api/bookshelf`, {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json',
//         'x-access-token': `Bearer ${token}`
//       }
//     });

//     if (!response.ok) {
//       throw new Error('failed to delete data to server')
//     }

//     return await response.json()
//   }
// }




let token = 'b9849e1ea91229dadd455c35ab42d41c44abcc62fc9d8973'

export const server_calls = {
  get: async () => {
    const response = await fetch(`https://bookshelfbookshelf.glitch.me/api/bookshelf`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error('failed to fetch data from server')
    }

    return await response.json()
  },
  create: async (data: any = {}) => {
    const response = await fetch(`https://bookshelfbookshelf.glitch.me/api/bookshelf`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('failed to create data on server')
    }

    return await response.json()
  },
  update: async (id: string, data: any = {}) => {
    const response = await fetch(`https://bookshelfbookshelf.glitch.me/api/bookshelf/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('failed to update data on server')
    }

    return await response.json()
  },
  delete: async (id: string) => {
    const response = await fetch(`https://bookshelfbookshelf.glitch.me/api/bookshelf/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error('failed to delete data to server')
    }

    return await response.json()
  }
}