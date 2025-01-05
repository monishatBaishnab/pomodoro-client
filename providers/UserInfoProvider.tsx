import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

import { getCurrentUser } from "@/services/auth";
import { TUserInfo } from "@/types";

type TUserInfoContext = {
  userInfo: TUserInfo | null;
  setUserInfo: Dispatch<SetStateAction<TUserInfo | null>>;
  userInfoLoading: boolean;
  setUserInfoLoading: Dispatch<SetStateAction<boolean>>;
};

const UserInfoContext = createContext<TUserInfoContext | null>(null);

export const useUserInfo = () => {
  const context = useContext(UserInfoContext);

  if (context === null) {
    throw new Error("useUserInfo must be used within the UserInfoProvider context");
  }

  return context;
};

const UserInfoProvider = ({ children }: { children: ReactNode }) => {
  const [userInfo, setUserInfo] = useState<TUserInfo | null>(null);
  const [userInfoLoading, setUserInfoLoading] = useState<boolean>(true);

  const getCurrentUserInfo = async () => {
    const currentUserInfo = await getCurrentUser();

    setUserInfo(currentUserInfo);
  };

  useEffect(() => {
    getCurrentUserInfo();
    console.log("object");
    setUserInfoLoading(false);
  }, [userInfoLoading]);

  return (
    <UserInfoContext.Provider
      value={{ userInfo, setUserInfo, userInfoLoading, setUserInfoLoading }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};

export default UserInfoProvider;
