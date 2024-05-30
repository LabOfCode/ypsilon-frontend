interface AuthState {
  getIsLoggedIn: boolean;
  user: {
    name: string;
  };
}

const getIsLoggedIn = (state: AuthState) => state.getIsLoggedIn;
const getUsername = (state: AuthState) => state.user.name;

const authSelectors = {
   getIsLoggedIn,
   getUsername,
};

export default authSelectors;
