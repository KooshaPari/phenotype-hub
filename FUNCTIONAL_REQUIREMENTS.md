# Functional Requirements

## Overview
phenotype-hub provides the service discovery, routing, auth, and observability
control plane for the Phenotype ecosystem.

## Requirements

| ID | Title | Description | Priority | Status |
|----|-------|-------------|----------|--------|
| FR-001 | Service discovery | Register and discover services through dynamic registry backends. | High | Backlog |
| FR-002 | Dynamic routing | Route requests by path, host, and header with configurable upstream selection. | High | Backlog |
| FR-003 | Authentication and authorization | Support OAuth, API key, and mTLS auth for inbound and service-to-service traffic. | High | Backlog |
| FR-004 | Load balancing | Support round-robin, least-connections, and weighted routing strategies. | Medium | Backlog |
| FR-005 | Rate limiting and circuit breaking | Protect upstream services with rate limits and health-aware circuit breaking. | Medium | Backlog |
| FR-006 | Request transformation | Support header injection and request/response modification at the gateway boundary. | Low | Backlog |
| FR-007 | Observability | Emit tracing, metrics, and structured logging for all gateway traffic. | Low | Backlog |

## Test Traceability

| FR | Test File | Test Name | Status |
|----|-----------|-----------|--------|
| FR-001 | `tests/integration/routing_test.rs` | Pending traceability test | Pending |
| FR-002 | `tests/integration/routing_test.rs` | Pending traceability test | Pending |
| FR-003 | `tests/integration/routing_test.rs` | Pending traceability test | Pending |
| FR-004 | `tests/unit/` | Pending traceability test | Pending |
| FR-005 | `tests/unit/` | Pending traceability test | Pending |
| FR-006 | `tests/unit/` | Pending traceability test | Pending |
| FR-007 | `tests/unit/` | Pending traceability test | Pending |
