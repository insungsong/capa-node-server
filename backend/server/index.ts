/**
 * 서버를 실행하는 entrypoint 입니다.
 *
 * @author InsungSong, Inc.
 * @packageDocumentation
 * @module server
 * @preferred
 */

import { PORT } from "../env.config";
import expressApp from "./express";

expressApp.listen(PORT, () => {
  console.log(`✅ Server ready on http://localhost:${PORT}`);
});
