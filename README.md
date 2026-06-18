# Updown

## Overview

Updown is a Temporal learning project built with the TypeScript SDK.

The goal of this repository is to gain practical experience with workflow orchestration and the broader Temporal ecosystem by implementing realistic business processes and production-oriented patterns.

The project is inspired by Upfront, a company whose content I enjoy following. In several of their videos, operational and coordination challenges are discussed that could benefit from a workflow orchestration platform such as Temporal. These types of challenges often involve multiple systems, manual steps, long-running processes, retries, approvals, and state management.

To explore how Temporal can address these challenges, this repository introduces **Updown**: a fictional counterpart used to model and automate business processes in a controlled environment.

## Project Goals

The purpose of Updown is to explore and gain hands-on experience with:

* Workflow Orchestration
* Activities
* Signals
* Queries
* Schedules
* Retries
* Cancellation
* Workflow Versioning
* Observability
* Production-Oriented Workflow Patterns
* Long-Running Business Processes

The project is intentionally focused on learning through realistic implementations rather than isolated code examples.

## Example Business Processes

As the project evolves, multiple workflows will be implemented to simulate real-world operational challenges, such as:

* Order processing
* Customer onboarding
* Approval flows
* Inventory management
* Notification workflows
* Scheduled maintenance processes
* Multi-step business operations
* Human-in-the-loop workflows

These scenarios provide opportunities to experiment with Temporal's reliability, scalability, and resilience features.

## Monitoring & Observability

A major focus of this project is observability.

Understanding how workflows behave in production is just as important as implementing them. Therefore, monitoring and visibility are treated as first-class concerns throughout the project.

The observability stack consists of:

* Temporal
* Prometheus
* Grafana

This setup enables visibility into:

* Workflow execution metrics
* Activity success and failure rates
* Retry behavior
* Worker performance
* Queue backlog
* Workflow duration and latency
* Schedule executions
* Temporal service health

## Technology Stack

* TypeScript
* Node.js
* Temporal
* Docker
* Prometheus
* Grafana

## Learning Roadmap

### Core Concepts

* [ ] Workflow Fundamentals
* [ ] Activities
* [ ] Workflow Inputs & Outputs
* [ ] Timers
* [ ] Retries & Retry Policies
* [ ] Error Handling
* [ ] Task Queues

### Workflow Communication

* [ ] Signals
* [ ] Queries
* [ ] Signal-With-Start
* [ ] Updates

### Advanced Workflow Patterns

* [ ] Child Workflows
* [ ] Continue-As-New
* [ ] Sagas / Compensation Patterns
* [ ] Human-in-the-Loop Workflows
* [ ] Entity Workflows
* [ ] Fan-Out / Fan-In Patterns

### Scheduling & Lifecycle

* [ ] Schedules
* [ ] Cron Workflows
* [ ] Workflow Cancellation
* [ ] Activity Cancellation
* [ ] Workflow Timeouts

### Versioning & Deployments

* [ ] Patching
* [ ] Workflow Versioning
* [ ] Safe Deployments
* [ ] Backward Compatibility
* [ ] Worker Upgrades

### Observability

* [ ] Prometheus Integration
* [ ] Grafana Dashboards
* [ ] Temporal Metrics
* [ ] Structured Logging
* [ ] Tracing
* [ ] Performance Monitoring

### Production Readiness

* [ ] Dockerized Environment
* [ ] Worker Scaling
* [ ] Retry Strategy Design
* [ ] Failure Recovery
* [ ] Monitoring & Alerting
* [ ] Operational Best Practices

## Project Vision

The long-term goal of Updown is to build a practical understanding of Temporal and workflow orchestration by progressively implementing more advanced patterns and production scenarios.

Over time, the repository will evolve into a collection of documented examples covering both fundamental and advanced Temporal concepts, with a strong emphasis on observability, reliability, and maintainability.

The ultimate objective is not only to learn Temporal's APIs, but also to understand how workflow orchestration can be applied to solve real-world business and operational challenges in production environments.
