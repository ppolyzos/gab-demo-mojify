import * as fs from 'fs';

export function getOsEnv(key: string): string {
  return process.env[key];
}

export function getOsEnvArray(key: string, delimiter: string = ','): string[] | boolean {
  return process.env[key] && process.env[key].split(delimiter) || false;
}

export function toNumber(value: string): number {
  return parseInt(value, 10);
}

export function toBool(value: string): boolean {
  return value === 'true';
}

export function getFromFile(filepath: string): string {
  return fs.existsSync(filepath) ? fs.readFileSync(filepath, 'utf8') : '';
}

export function normalizePort(port: string): number | string | boolean {
  const parsedPort = parseInt(port, 10);
  if (isNaN(parsedPort)) { // named pipe
    return port;
  }
  if (parsedPort >= 0) { // port number
    return parsedPort;
  }
  return false;
}

export const bitToBoolean = (field: any, next: any) => {
  if (field.type == 'BIT' && field.length === 1) {
    const bytes = field.buffer();
    return !!bytes && !!bytes.length && bytes[0] === 1;
  }
  return next();
};


export function includesAny(collection: string[], items: string[]) {
  if (!collection || collection.length === 0)  return true;

  for (const item of collection) {
    if (items.includes(item)) {
      return true;
    }
  }

  return false;
}
