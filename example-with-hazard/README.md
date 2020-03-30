# Manifestation of the Dual Package Hazard

https://nodejs.org/api/esm.html#esm_dual_package_hazard

Output (note that the node part of the v1 uuids **IS NOT THE SAME**):

```
direct v1 #1 a62210e0-7297-11ea-b0f7-e35a8704dcdf
direct v1 #2 a62210e1-7297-11ea-b0f7-e35a8704dcdf
hazard v1 #1 a6225f00-7297-11ea-a136-cb3d22f4ccab
hazard v1 #2 a6225f01-7297-11ea-a136-cb3d22f4ccab
internal/modules/run_main.js:57
    internalBinding('errors').triggerUncaughtException(
                              ^

AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:
+ actual - expected

+ '11ea-b0f7-e35a8704dcdf'
- '11ea-a136-cb3d22f4ccab'
        ^
    at file:///***/uuid-dual-package-hazard/example-with-hazard/dual-package-hazard.js:27:8
    at ModuleJob.run (internal/modules/esm/module_job.js:110:37)
    at async Loader.import (internal/modules/esm/loader.js:164:24) {
  generatedMessage: true,
  code: 'ERR_ASSERTION',
  actual: '11ea-b0f7-e35a8704dcdf',
  expected: '11ea-a136-cb3d22f4ccab',
  operator: 'strictEqual'
}
```
