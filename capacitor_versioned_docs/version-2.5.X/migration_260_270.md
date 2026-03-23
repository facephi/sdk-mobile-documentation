# Migrate from 2.6.X to 2.7.X

## 1. Introduction

<div class="warning">
<span class="warning">:warning:</span>
The following document contains different issues that can appear during the migration from SDK Mobile ***2.6.X version*** to the SDK Mobile ***2.7.X version***. Depending on the developer application and its configuration. 
</div>

### 1.1 Remove enableSecurityMode param.

In the Sdk Core the enableSecurityMode is remove and replaced by the new param called internalOtions. By default the securityMode is always in true. If you need to disabled it, you'll need to pass the following value:

- `internalOptions: {'SKIP_ENV_CHECK': 'true'}`