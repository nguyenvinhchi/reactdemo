const API_DOMAIN = 'https://react-demo-8d4f0.firebaseio.com/';

export async function getAllQuotes() {
  const response = await fetch(`${API_DOMAIN}/quotes.json`)
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch quotes.');
  }

  const transformedQuotes = transformFirebaseDataListWithKeyWrapper(data);
  
  return transformedQuotes;
}

export async function addQuote(quoteData) {
  const response = await fetch(`${API_DOMAIN}/quotes.json`, {
    method: 'POST',
    body: JSON.stringify(quoteData),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not create quote.');
  }

  return null;
}

export async function getQuote(id) {
  const response = await fetch(`${API_DOMAIN}/quotes/${id}.json`)
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not get quote id = ' + id)
  }
  const transformedData = !data ? null : {
    id,
    ...data
  }

  return transformedData;
}

export async function addComment(requestData) {
  const response = await fetch(`${API_DOMAIN}/comments/${requestData.quoteId}.json`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(requestData.commentData)
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not add comment')
  }

  return { commentId: data.name}
}

export async function getAllComments(quoteId) {
  const response = await fetch(`${API_DOMAIN}/comments/${quoteId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not get comments')
  }
  // console.log('comments data for ', quoteId, data)
  return transformDataObject(data, 'id', 'text');
}

function transformFirebaseDataListWithKeyWrapper(dataList) {
  const transformedList = [];

  for (const key in dataList) {
    const dataItem = {
      id: key,
      ...dataList[key],
    };
    transformedList.push(dataItem);
  }

  // console.log('data: ', dataList)
  // console.log('convert data: ', transformedList)
  return transformedList;
}

function transformDataObject(dataObject, keyFieldName, valueFieldName) {
  const transformedList = [];
  for (const key in dataObject) {
    transformedList.push({[keyFieldName]: key, [valueFieldName]: dataObject[key]});
  }

  // console.log('data: ', dataObject)
  // console.log('convert data: ', transformedList)
  return transformedList;
}




