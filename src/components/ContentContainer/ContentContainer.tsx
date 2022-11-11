import { Route, Routes } from "react-router-dom";
import { AppConfig } from "../AWS/AppConfig";
import { Aurora } from "../AWS/Aurora";
import { ParameterStore } from "../AWS/ParameterStore";
import { S3 } from "../AWS/S3";
import { SecretsManager } from "../AWS/SecretsManager";
import { Comprehend } from '../AWS/Comprehend';
import { TopNavigation } from "../TopNavigation/TopNavigation";

export const ContentContainer = () => {
  return (
    <div className="content-container">
      <TopNavigation />
      <div className="content-list">
        <Routes>
          <Route path='secrets' element={<SecretsManager />} />
        </Routes>
        <Routes>
          <Route path='ssm' element={<ParameterStore />} />
        </Routes>
        <Routes>
          <Route path='s3' element={<S3 />} />
        </Routes>
        <Routes>
          <Route path='appconfig' element={<AppConfig />} />
        </Routes>
        <Routes>
          <Route path='aurora' element={<Aurora />} />
        </Routes>
        <Routes>
          <Route path='comprehend' element={<Comprehend />} />
        </Routes>
      </div>
    </div>
  );
}