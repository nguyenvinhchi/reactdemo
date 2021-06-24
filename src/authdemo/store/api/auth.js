import { API_DOMAIN, API_KEY } from "./apiConstants";

export const callAuthenticate = async (request) => {
  const authAction = request.isSignup
    ? "accounts:signUp"
    : "accounts:signInWithPassword";
  const apiUrl = `${API_DOMAIN}/${authAction}?key=${API_KEY}`;

  const { email, password } = request.data;
  const response = await fetch(apiUrl, {
    headers: { "Content-Type": "application/json" },
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
      requestreturnSecureToken: true,
    }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error((data.error && data.error.message) || 'Something went wrong!')
  }

  return {
    accessToken: data.idToken,
    email: data.email,
    refreshToken: data.refreshToken,
    expiresIn: data.expiresIn,
    userId: data.localId,
  };
};