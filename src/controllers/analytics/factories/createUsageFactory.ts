import { UsageEventDataBase } from "../../../models/analytics/analiticsDataBase";
import { CreateUsageEventUseCase } from "../../../services/analytics/createUsageUseCase";

export function createUsageFactory(){
    const usageRepository = new UsageEventDataBase();
    const useCase = new CreateUsageEventUseCase(usageRepository);
    return useCase;
}