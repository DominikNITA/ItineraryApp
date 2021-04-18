#!/bin/bash

PROTO_DIR=./proto

# Generate JavaScript code
npx grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${PROTO_DIR} \
    --grpc_out=./proto \
    -I ./proto \
    proto/*.proto

# Generate TypeScript code (d.ts)
npx grpc_tools_node_protoc \
    --ts_out=./proto \
    -I ./proto \
    proto/*.proto
    