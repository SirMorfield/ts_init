# TS init

A template repository for TypeScript projects\
Because the whole JS build system is quite confusing

# Features

- eslint
- eslint caching
- prettier (as subset of eslint so you can use eslint --fix and not have to also run prettier)
- Lining check in github pipeline
- pre-commit hook for linting
- containerized by docker
- Pushes image to container registry on merge to master
- Watchtower to automatically pull latest image from container registry
- ES module

# TODO
- Use multi stage build to reduce image size
- Caching in docker (compose)
- Run pipeline locally
- Improve the containerize.yaml to also support tags
- Add playwright/jest testing
- Run test suite in pipeline
