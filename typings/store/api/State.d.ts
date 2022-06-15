import type { AllianceInfo } from 'typings/api/AllianceInfo';
import type { Building } from '../../Building';
import type { CreditsInfo } from 'typings/api/Credits';
import type { Mission } from 'typings/Mission';
import type { Settings } from 'typings/api/Settings';
import type { Vehicle } from '../../Vehicle';

export interface StorageAPIs {
    buildings: Building[];
    vehicles: Vehicle[];
    alliance_buildings: Building[];
    allianceinfo: AllianceInfo | null;
    settings: Settings | null;
    credits: CreditsInfo | null;
}

export type StorageAPIKey = keyof StorageAPIs;

export interface APIGetter<T extends StorageAPIKey> {
    value: StorageAPIs[T] | null;
    lastUpdate: number;
}

export interface EnsuredAPIGetter<API extends StorageAPIKey> {
    value: Exclude<StorageAPIs[API], null>;
    lastUpdate: number;
}

export interface APIState extends StorageAPIs {
    missions: Record<string, Mission>;
    autoUpdates: StorageAPIKey[];
    currentlyUpdating: StorageAPIKey[];
    secretKey: string | null;
    lastUpdates: Partial<Record<StorageAPIKey, number>>;
}
