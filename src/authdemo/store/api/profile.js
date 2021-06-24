import { API_DOMAIN, API_KEY } from "./apiConstants";

const API_ACCOUNT_UPDATE_URL = `${API_DOMAIN}/accounts:update?key=${API_KEY}`;

export const callUpdatePassword = async ({accessToken, newPassword}) => {
  const response = await fetch(API_ACCOUNT_UPDATE_URL, {
    headers: { "Content-Type": "application/json" },
    method: 'POST',
    body: JSON.stringify({
      idToken: accessToken,
      password: newPassword,
      requestreturnSecureToken: false,
    }),
  });

  const data = await response.json();
  console.log('api response data: ', data)
  if (!response.ok) throw new Error((data.error && data.error.message) || 'Something went wrong!');

}