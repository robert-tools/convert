---
id: ADR-002
version: 1.0.0
title: Base architecture of convert cases
status: accepted
date: 2026-09-19
authors:
  - Robert Willemelis
tags: [architecture]
---
## Context
The convert cases module provides utility functions for converting strings between different case formats, such as camelCase, kebap-case, and Header Case.

## References
- 👉 [ADR-002: Cases](002-adr-convert-cases.md) - Standardized handling of string case conversions.


## Decisions

### 1. convert2
Should be the basic prefix for the functions.

#### 📋Reasoning: 
* **name:** easier to understand to which lib the function belongs.

### 2. convert2HeaderCase
Needed for HTTP headers and other contexts where Header-Case is the standard.

#### 📋Reasoning: 
* **dashes:** replace underscores and spaces with dashes for Header-Case and convert multiple dashes to a single dash (needs to be at the end to avoid issues). Avoid leading and trailing dashes.


