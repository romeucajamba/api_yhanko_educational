import { UsageEventDataBase } from "../../../models/analytics/analiticsDataBase";
import { GetUserEventsUseCase } from "../../../services/analytics/getUsageUseCase";

export function getUsageFactory(){
    const usageRepository = new UsageEventDataBase();
    const useCase = new GetUserEventsUseCase(usageRepository);
    return useCase;
}