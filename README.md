# phenotype-hub

Central discovery, orchestration, and routing hub for the Phenotype ecosystem. Provides dynamic service discovery, API gateway functionality, workflow routing, and unified access to all Phenotype services.

## Overview

**phenotype-hub** is the service mesh control plane and API gateway for the Phenotype platform. It provides intelligent service discovery, dynamic routing, request orchestration, and unified authentication/authorization across all Phenotype services. Acts as the single entry point for all external and internal service-to-service communication.

**Core Mission**: Enable seamless service-to-service communication with automatic discovery, intelligent routing, unified auth, and comprehensive observability.

## Technology Stack

- **API Gateway**: Rust-based reverse proxy with dynamic route configuration
- **Service Discovery**: Consul/etcd integration for dynamic service registration
- **Load Balancing**: Round-robin, least-connections, weighted routing strategies
- **Authentication**: Unified OAuth, API key, and mTLS support
- **Observability**: Request tracing, metrics collection, comprehensive logging
- **Configuration**: TOML-based gateway configuration with hot-reload support

## Key Features

- **Service Discovery**: Automatic service registration and health checking
- **Dynamic Routing**: Request path-based, host-based, and header-based routing rules
- **Load Balancing**: Multiple strategies with health-aware upstream selection
- **Rate Limiting**: Per-service and per-consumer rate limits
- **Authentication**: OAuth 2.0, API keys, mTLS, custom auth plugins
- **Request Transformation**: Header injection, request/response modification
- **Circuit Breaking**: Automatic upstream circuit breaking with configurable thresholds
- **Analytics**: Request/response logging, latency histograms, error tracking

## Quick Start

```bash
# Clone and explore
git clone <repo-url>
cd phenotype-hub

# Review governance and architecture
cat CLAUDE.md          # Project governance
cat PRD.md             # Product requirements
cat AGENTS.md          # Agent operating contract

# Build the hub
cargo build --release

# Run with example config
./target/release/phenotype-hub --config config/example.toml

# Run tests
cargo test --workspace

# View metrics
curl http://localhost:9090/metrics
```

## Project Structure

```
phenotype-hub/
├── src/
│   ├── gateway/
│   │   ├── server.rs           # HTTP server and listener
│   │   ├── router.rs           # Request routing engine
│   │   ├── upstream.rs         # Upstream server management
│   │   └── middleware.rs       # Request/response middleware chain
│   ├── discovery/
│   │   ├── registry.rs         # Service registry interface
│   │   ├── consul.rs           # Consul adapter
│   │   └── health_check.rs     # Health check engine
│   ├── auth/
│   │   ├── oauth.rs            # OAuth 2.0 handler
│   │   ├── api_key.rs          # API key auth
│   │   └── mtls.rs             # mTLS support
│   ├── load_balance/
│   │   ├── strategy.rs         # Load balancing strategies
│   │   └── health_aware.rs     # Health-aware selection
│   ├── observability/
│   │   ├── tracing.rs          # Distributed tracing
│   │   ├── metrics.rs          # Metrics collection
│   │   └── logging.rs          # Structured logging
│   ├── config/
│   │   ├── parser.rs           # TOML config parsing
│   │   └── schema.rs           # Configuration schema
│   └── main.rs
├── config/
│   ├── example.toml            # Example configuration
│   ├── production.toml         # Production config template
│   └── development.toml        # Development config
├── docs/
│   ├── ARCHITECTURE.md         # System design
│   ├── ROUTING.md              # Routing rules documentation
│   ├── CONFIGURATION.md        # Config file reference
│   └── INTEGRATION.md          # Integration guide
├── examples/
│   ├── basic_routing.rs
│   ├── service_discovery.rs
│   └── auth_setup.rs
├── tests/
│   ├── integration/
│   │   └── routing_test.rs
│   └── unit/
└── Cargo.toml
```

## Governance & Contributing

- **CLAUDE.md** — Project governance and workspace conventions
- **PRD.md** — Product requirements and feature prioritization
- **AGENTS.md** — Agent operating contract and testing guide
- **Functional Requirements**: [docs/FUNCTIONAL_REQUIREMENTS.md](docs/FUNCTIONAL_REQUIREMENTS.md)
- **Architecture**: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)
- **Changelog**: [CHANGELOG.md](CHANGELOG.md)

All work requires AgilePlus spec before implementation. See CLAUDE.md for mandate details.

## Related Phenotype Projects

- **[AuthKit](../AuthKit/)** — Unified authentication backend; hub uses for auth and API key validation
- **[phenotype-ops-mcp](../phenotype-ops-mcp/)** — MCP server for hub management, configuration, and dynamic updates
- **[Tracera](../Tracera/)** — Distributed tracing; hub exports all request traces and metrics
- **[PhenoObservability](../PhenoObservability/)** — Metrics collection and dashboard integration
- **[AgilePlus](../AgilePlus/)** — Work tracking and workflow orchestration
- **[cloud](../cloud/)** — Multi-tenant platform; hub provides unified routing layer