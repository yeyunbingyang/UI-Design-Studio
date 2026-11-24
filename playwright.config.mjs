import {defineConfig} from '@playwright/test';
export default defineConfig({
 testDir:'./tests/qa',timeout:45000,fullyParallel:true,workers:2,
 reporter:[['list'],['html',{open:'never'}],['json',{outputFile:'qa-results/results.json'}]],
 outputDir:'qa-results/artifacts',
 use:{browserName:'chromium',baseURL:'http://127.0.0.1:8080',trace:'retain-on-failure',screenshot:'only-on-failure',launchOptions:process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{}},
 webServer:{command:'python -m http.server 8080 --bind 127.0.0.1',url:'http://127.0.0.1:8080/prototype/v2/',reuseExistingServer:!process.env.CI,timeout:30000}
});
