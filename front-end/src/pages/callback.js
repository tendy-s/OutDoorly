import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { getAuthCallBackRoute, getRoutes } from "../routes";
import { USER_SESSION, writeToLocalStorage } from "../session";
import { ClimbingBoxLoader } from "react-spinners";

export function OAuthCallbackPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const code = queryParams.get("code");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUserSessionToken = async () => {
      try {
        if (code) {
          const response = await axios.get(getAuthCallBackRoute(code));
          const { token } = response.data;
          writeToLocalStorage(USER_SESSION, token);
        }
      } catch (error) {
        console.error("Error fetching user session token:", error);
      } finally {
        setLoading(false);
        navigate(getRoutes().home);
      }
    };

    fetchUserSessionToken();
  }, [code]);

  return (
    <div>
      {loading ? (
        <ClimbingBoxLoader />
      ) : (
        <p>Error: Unable to fetch user session token.</p>
      )}
    </div>
  );
}
